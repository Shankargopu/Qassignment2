let paragraph="Thank you so much for contacting us. Dreamland guest relations.You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!"

let newParagraph=paragraph.replace(/[6-9]\d{9}/g,'XXXXXXXXX').trim();

let sentences=newParagraph.replace(/\.+/g,'.|').replace(/\?+/g,'?|').split("|");



let sentence1=[];
for(let i in sentences)
{
    let words=sentences[i].split('');
    let count=words.length;
    if(count-1>3)
    {
        sentence1.push(sentences[i]);
    }
}
for(let i in sentence1)
{
    console.log(sentence1[i])
}
console.log(sentences);
