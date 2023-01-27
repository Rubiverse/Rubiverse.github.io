document.querySelectorAll('a[href^="#erno"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#div1"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#AboutUs"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

records = document.getElementById("records");
records.addEventListener(click, function(){
    cuber1 = document.getElementById("h2F").style.backgroundColor = "blue";
    
})



function trans(){
    document.querySelector(".h2-AboutUs").innerHTML = ":داستان وبسایت ما";
    document.querySelector(".PAbout").innerHTML = "این وبسایت توسط  طناز شجاعی و گلبرگ باب الحوایجی  ساخته شده. <br> تلاش های بسیاری کردیم تا این کار رو تمام کنیم در ابتدا خبر نداشتیم که حداکثر مهلت تحویل پروژه تا کی هست اما وقتی فهمیدیم بالاخره فقط توی سه روز این وبسایت رو با کمک همدیگه درست کردیم <br> امیدوارم از محتوایی که براتون آماده کردیم خوشتون بیاد <br> خیلی سخت بود اما بالاخره تمامش کردیم <br> <br> انتخاب چرا روبیورس؟؟" + " <br> <br> Rubi => Rubik ,  Verse => universe" ; 
}
function transEn(){
    document.querySelector(".h2-AboutUs").innerHTML = "The Story Of The Website:"
    document.querySelector(".PAbout").innerHTML = "This website is made by <span > Tannaz Shojaei </span> and <span> Golbarg Babalhavaeji </span> <br> We tried a lot tested and put so much effort to get this work done <br> At first we didn't know the deadline was on staurday 8th Bahman but then we realized it and finally made it in only 3 days!!! <br> Hope you enjoyed the content and information we prepared for you! <br> It was so hard to get our website done in only 3 days but we made it <br> <br> <b> Why Rubiverse?? </b> <br> <br> Rubi short for Rubik and <br> verse short for universe"
    
}