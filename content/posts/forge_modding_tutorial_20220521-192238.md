---
title: "Minecraft ForgeのModを作る"
slug: forge_modding_tutorial_20220521-192238
date: 2022-05-21T19:22:39+09:00

tags: ["PC", "Java", "Minecraft"]
categories: ["PC関連"]

draft: false
---

MinecraftのModdingを始めるにあたり色々と詰まった場所が多かったので忘備録です  
環境構築については記事が溢れているのでコーディング関連のみメモっときます  
1.8.9で作ったのでそれ以外だとちょっと違うかもです  

## LOGの出力
```
public static final Logger logger = LogManager.getLogger(ExampleMod.MODID);
ExampleMod.logger.info("HelloWorld");
```
infoの他にもdebug，warn，error，fatal等が使えるらしいです  
出力されるLOGはマイクラのランチャーの設定から，出力ログを開くを有効にしておくと確認できます  

## Event関連
チャットを受け取った時に実行する関数みたいなのを作る場合はSubScribeEventというものを使います  

まずinit関数の中に`MinecraftForge.EVENT_BUS.register(this);`と書いておきます  
そして例えばチャットを受け取った際に実行される関数の場合，  
```
@SubscribeEvent
public void onChat(final ClientChatReceivedEvent event){
}
```
のようにすることでイベントを登録することができます  
イベントは引数で決まっているので関数名は何でもOKです  
この際に引数になっているevent変数からイベントによって色々な引数を取ることができます  
onChat関数の場合，`event.message.getUnformattedText()`でチャットの内容が取れたりします  
イベントは`net.minecraftforge.event`パッケージに入っています  
調べた感じイベントを纏めてるサイトは無かったのでその都度調べるほうがいいかもです  
## 難読化
ゲームから情報を取りたい!みたいになった時に，ゲーム内のクラスが難読化されていてとてもわかりずらいです  
例えばホットバーの上に出てくる文字列を取得する場合は  
```
(String) ReflectionHelper.findField(GuiIngame.class, "recordPlaying", "field_73838_g").get(Minecraft.getMinecraft().ingameGUI);
```
みたいになります  
この中の`field_73838_g`が難読化されたクラス名です  
[ここ](https://github.com/KevyPorter/Minecraft-Forge-Utils/blob/master/fields.csv)に纏められています

## レンダリング
文字列のレンダリングは以下のようにするとできます  
```
public void renderOverlay(RenderGameOverlayEvent event) {
    FontRenderer fRender = Minecraft.getMinecraft().fontRendererObj;
    fRender.drawStringWithShadow("HelloWorld", 5, 10, 0);
}
```
`drawStringWithShadow`の引数は文字列，x，y，color(RGBを10進数に変換)です  
しかしこのままだとHPの部分とかが凄い色になったりしてヤバくなります  
解決策は  
```
public void renderOverlay(RenderGameOverlayEvent.Post event) {
    if(event.type == RenderGameOverlayEvent.ElementType.ALL){
        FontRenderer fRender = Minecraft.getMinecraft().fontRendererObj;
        fRender.drawStringWithShadow("HelloWorld", 5, 10, 0);
    }
}
```
です  
`RenderGameOverlayEvent`を`RenderGameOverlayEvent.Post`にして，`event.type == RenderGameOverlayEvent.ElementType.ALL`の場合のみレンダリングすると良い感じになりました  

今回作ったModは[これ](https://github.com/GODofMEGANE/GTBsolver)です  
他にも詰まる部分があったら追記していきます  