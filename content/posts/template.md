---
title: "タイトル"
slug: this_is_url #URLのposts以降
date: 2022-01-01T01:23:45+09:00 #記事作成日時
thumbnail: 'images/megane.png' #記事の一番上とプレビューに表示される画像、static以下を入力

tags: ["PC", "Web"]
categories: ["未分類"]

draft: true #trueで下書き扱いになり表示されない
---
# Markdown記法
- もくじ
  - [改行のしかた](#改行のしかた)
  - [見出しの書き方](#見出しの書き方)
  - [修飾文字](#修飾文字)
  - [リストの作り方](#リストの作り方)
  - [引用](#引用)
  - [コードブロック](#コードブロック)
  - [リンク、画像](#リンク画像)
  - [表](#表)
<!-- ちなみにコメントアウトはこうやって書ける -->
<!-- 水平線はアンダースコア、アスタリスク、ハイフンのどれかを3つ連続させる -->
## 改行のしかた  
<a id="anchor1"></a>

これだと
改行されない

スペース2個で<!--ここにスペース⇒-->  
改行される

## 見出しの書き方
# 見出し1
あああ
## 見出し2
いいい
### 見出し3
ううう

## 修飾文字
*アスタリスクで囲めば強調*  
_アンダースコアでもOK_

**二つで囲めば更に強調**  
__こちらも同様__

***三つで囲むと***  
___最強になります___

~~チルダ二つで取り消し線~~

## リストの作り方
- リスト
    - ネストも可
        1. 番号付きで
        2. リストできる
        3. 全部1.でOK
    - ネスト
- リスト
- リスト
  
## 引用
> 引用は  
> こう書ける
>> 二重引用

## コードブロック
コードなどは`$ echo "Surround with back quotation"`
<!-- チルダかバッククォーテーション三つでプログラムを書ける -->
~~~
int hoge = 0;
hoge += 100;
~~~
<!-- 最初に言語を書けばシンタックスハイライト -->
```c++
int hoge = 0;
hoge += 100;
```

## リンク、画像
[リンクはこう置く](https://www.google.co.jp/)  
画像はこう置く  
{{< img src="images/gal_o_man.png" w="150" h="100" >}}
{{< img src="images/gal_o_man.png" w="150" h="100" caption="こんな感じで参照できる" href="https://www.irasutoya.com/2019/12/blog-post_866.html">}}

## 表
|表は|こうやって|書きます|
|:--|--:|:--:|
|寄せたりは|こうやって|書きます|
|左|右|中|