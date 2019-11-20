#include <bits/stdc++.h>
#include <time.h>
using namespace std;

typedef long long int LL;
typedef long long int LLint;

//Faster Program
#define endl "\n"

//Faster Coding
#define ED return
#define GET(a) int a;cin >> a
#define SGET(a) string a;cin >> a
#define CGET(a) char a;cin >> a
#define PRINT(a) cout << a << endl
#define ANS(a,b) int a;cin >> a;cout << b << endl
#define SORT(vec) sort(vec.begin(),vec.end())
#define REV(vec) reverse(vec.begin(),vec.end())

//As Function
#define UP(a,b) ((a+(b-1))/b)
#define ipow(x,y) LL(pow(x,y))

//Debug
#define TEST cout << "OK" << endl

const double PI = M_PI;
const long long INF = int(10e9-1);
const long long MOD = int(10e9+7);

//Settings
const bool DO_BENCHMARK = false;
const int DOUBLE_ACCURACY = 15;

int main(){
    cin.tie(nullptr);
    ios::sync_with_stdio(false);
    cout << fixed << setprecision(DOUBLE_ACCURACY);
    void solve();
    if(DO_BENCHMARK){
        clock_t start = clock();
        solve();
        clock_t end = clock();
        const double time = static_cast<double>(end - start) / CLOCKS_PER_SEC * 1000.0;
        cout << endl << time << "[ms]" << endl;
    }
    else{
        solve();
    }
}

void solve(){
    int N;
    cin >> N;
    cout << N << endl;
}

