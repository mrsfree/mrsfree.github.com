ToDo

[X] Background Scaling
[X] Template Subpage
[ ] Language selection plus Autochoose
[ ] Back Home Button
[ ] Noscript
[ ] Content


```
<ow type="text" value="texts.welcome"></ow>

<ow type="loop" value="texts.myObject">
 Nummer: <ow type="text" value="{{owi}}.number"></ow> //myObject.abc.number
 Description: <ow type="text" value="{{owi}}.description"></ow>
</ow>

<ow type="loop" value="texts.myArray">
 Nummer: <ow type="text" value="{{owi}}.number"></ow>	//myArray[4].number
 Description: <ow type="text" value="{{owi}}.description"></ow>
</ow>
```