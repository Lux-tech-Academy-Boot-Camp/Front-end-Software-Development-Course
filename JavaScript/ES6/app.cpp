include<iostream>
#include<cstring>
using namespace std;

class Str
{
char *pData;
int nLength;
  public:
//constructors
Str();
Str(char *s);
Str(const Str &str);

//accessors
char* get_Data();
  int get_Len();

//destructor
~Str();
}
Str :: Str() {
pData = new char[1];
*pData = ‘\0’;
nLength = 0;
}

Str :: Str(char *s) {
pData = new char[strlen(s)+1];
strcpy(pData, s);
nLength = strlen(s);
}
Str :: Str(const Str &str) {
int n = str.nLength;
pData = new char[n+1];
nLength = n; strcpy(pData,str.pData);
}
   char* Str :: get_Data()
   {
  return pData;
   }

      int Str :: get_Len()
   {
  return nLength;
   }

   Str :: ~Str()
{
delete[] pData;
}
int main()
{
int x=3;
Str *pStr1 = new Str(“Joe”);
Str *pStr2 = new Str();
}

