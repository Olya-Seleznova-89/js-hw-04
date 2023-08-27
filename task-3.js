let languages = ["Pyton", "C++", "C#", "PHP"];

for (let language of languages){
    if ('Java Script' !== language){
        console.log(`Значення Java Script в списку немає, додаємов масив.`);
    }
}
languages.push('Java Script');
console.log(languages);