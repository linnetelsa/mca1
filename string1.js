//length
str='hello'
console.log(str.length);
//startswith()

console.log(str.startsWith('h'));
//endswith()
console.log(str.endsWith('o'));
//touppercase()
s='luminar'
g=s.toUpperCase()
console.log(g);
//toLowerCase()
s1='RED'
a=s1.toLowerCase()
console.log(a);

//substring
s='luminar'
g=s.substring(0,4)
console.log(g);

//slice()

b='morning'
a=b.slice(0,4)
console.log(a);

h='morning'
v=h.slice(-4)
console.log(v);

//split()

a='good afternoon all'
b= a.split('o')
console.log(b);

//replace()
sentence='i got a job in microsoft'
g= sentence.replace('microsoft','google')
console.log(g);

console.log('-----');
// print all vowels in the given string good morning all

a='goodmorning all'
h= a.split('g','l','d' ,'m','n')
console.log(h);


//mailid or not

gmail='linet@gmail.co'
   
 console.log(gmail.endsWith('@gmail.com')?'mailid':'notmailid');

 // given word starts with q or not 

 word='ueen'
  console.log(word.startsWith('q')?'yes':'no')