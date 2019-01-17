let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getData(lang) {
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${lang}`,
        success: function (data) {
            document.querySelector('#info-heading').innerHTML = data.info.heading;
            document.querySelector('#info-desc').innerHTML = data.info.description;
            document.querySelector('#sale-heading').innerHTML = data.sale.heading;
            document.querySelector('#sale-desc').innerHTML = data.sale.description;
            document.querySelector('.imagee').style['background-image'] = `url(${data.imageURL})`;
            const links = document.querySelectorAll('.nav-link');
            for (let i = 0 ; i < links.length; i++) {
                links[i].innerHTML = data.menuOptions[i];
            }

            const date = new Date(data.date);
            console.log(date.toString());

            document.querySelector("#date").innerHTML = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} - ${date.getHours()}h ${date.getMinutes()}m`; 
        },
        error: function (err) {
            console.log(err);
        }
    });
}