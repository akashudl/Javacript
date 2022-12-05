// let myname="Akash pandit"
// let mychannel="Akash"
// //escaper character  / backlash is esapce character
// //

// let anySenetence="We are the So-Called \"Vikings\" from the north.";
// console.log(anySenetence);

//Find String in  a String 
//indexOf every letter in the String get the Index no

// const mybio ='I am Akash pandit'
// console.log(mybio.indexOf('Akash')); // find 
// console.log(mybio.indexOf('a',5)); // find the the a position after 5 position of A


// //lastindexof seacrh the string from last to front
// const mybio ='I am Akash pandit'
// console.log(mybio.indexOf('Akash')); // find 
// console.log(mybio.indexOf('a',5));


//Searching for string in string 
//the search() method  searches  a string  for a specified
// //value  and returns the position of the match 
// const mybio ='I am Akash pandit'
// let sdata=mybio.search("Akash")
// console.log(sdata);
//the search method cannot take the  second start position of the argument


// Challenge time 
//Display only 280 charecter 
// let mytweets="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore temporibus minus excepturi aut iusto vel reprehenderit quibusdam rem aspernatur, ad quam natus unde veritatis, enim eos laudantium assumenda, iste quis libero officiis deserunt soluta! Fuga in impedit non veniam vel debitis et inventore nihil accusamus deleniti amet, nostrum animi ut labore quas minima soluta at praesentium doloribus. Sint quibusdam, perspiciatis, error soluta ad tenetur fugiat eius tempora incidunt rem excepturi iure, labore quaerat reiciendis quas vel dolorum repellendus minus. Eius fuga quae iusto nulla libero, quas ipsam? Similique totam delectus recusandae perferendis a hic consectetur perspiciatis dicta modi dolores quia, iure enim eius, veritatis repellat non quisquam distinctio et rerum? Exercitationem sequi, est maxime adipisci, doloremque repudiandae quis illum vitae, atque placeat voluptas impedit optio voluptatum nostrum. Exercitationem quisquam perspiciatis atque tempore, recusandae et veniam, maxime fugiat sed assumenda harum. Ut vero quam dolorem quo placeat aspernatur aliquid. Corporis a est porro recusandae sapiente aperiam error voluptatem veniam, dolor tempore atque amet facilis doloremque illum, voluptas doloribus praesentium fuga veritatis suscipit, deserunt eligendi eius ipsam libero? Repudiandae cum qui, eum esse cumque ipsum sit quibusdam vitae quas obcaecati consectetur sed iusto ullam voluptatum velit a. Eius excepturi accusantium molestiae sequi, repudiandae sapiente officia voluptatibus laborum pariatur enim rem eligendi deserunt alias dignissimos dolores omnis? Quae, vitae unde eaque aliquid aut qui, ea repellat, enim sequi labore ut laboriosam amet est dolorem voluptates officia rerum mollitia corrupti! Ab deleniti, dignissimos placeat commodi suscipit dolorum quaerat quo doloremque aut, labore odio ut sunt maiores quia necessitatibus in minus enim modi. Odit earum consectetur, rerum quas omnis aut, voluptatibus sunt id, dolorum error quisquam et optio eius reprehenderit deleniti. Ea neque illo impedit. Rerum illum architecto doloribus, adipisci assumenda, omnis rem maxime illo exercitationem hic neque mollitia soluta atque aliquam similique vero nam."


// let myactualtweets=mytweets.slice(0,280);
// console.log(myactualtweets);
// console.log(myactualtweets.length)


//substring method
//substing methid does not take negative indexes 
//if we give negative value then character are counted from 0 position 
// var str="Apple,Banana,Kiwi"
// let res=str.substring(0,5);
// console.log(res);


// // substr  method
// substr() is similar to slice

//the second parameter specifies the length of the exctracted part

// var str="Apple,Banana,Kiwi"
// let res=str.substr(-4);
// console.log(res);


// // replace method replace the value with string 
// const mybio ='I am Akash pandit'
// const newst=mybio.replace('Akash','Saurav')
// console.log(newst)


// to get the particula charatcer from strong use CharAt()


//challenge 
// find the uncode of the character in string and
//charCodeAt method returns the unicode of the character of the charecter at specified string
// var str ="Hello World"
// console.log(str.charCodeAt(0));


var txt="a,b,c,d,e";
//  a string can be converted to array ny using split method 
console.log(txt.split(","));
