var y;
function state() {
    var y = document.getElementById("state").value;
    if (y == 1) {
        document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7276032.536503829!2d76.38776471824778!3d27.06962985823148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580411717796!5m2!1sen!2sin";
    }
    console.log(y);
}
function look() {
    var x = document.getElementById("area").value;
    console.log(x);
    if (y == 1) {
        if (x == 1)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7144.103719526606!2d80.2710461727338!3d26.4540572387751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47e4d0fc860d%3A0xfad307fab3a2afef!2sAzad%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208022!5e0!3m2!1sen!2sin!4v1580083035805!5m2!1sen!2sin";
        else if (x == 2)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.208198066704!2d80.27529317116155!3d26.478217890017245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3803a704fad9%3A0xdf728e7f1f2ded9e!2sKakadeo%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580104443182!5m2!1sen!2sin";
        else if (x == 3)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33975.91003133912!2d80.21926547188535!3d26.479004761390605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37c8be4e98d9%3A0xc11b3cde1dcabdea!2sPanki%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580104560740!5m2!1sen!2sin";
        else if (x == 4)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28573.053822433587!2d80.25329789502292!3d26.467597400209446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37e365d8968b%3A0x4534c46b2259d8df!2sArmapur%20Estate%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580104630044!5m2!1sen!2sin";
        else if (x == 5)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.943668974975!2d80.25646497116523!3d26.488398288245463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37f2bf0633d1%3A0x9624971835a3adef!2sAwas%20Vikas%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580104798086!5m2!1sen!2sin";
        else if (x == 6)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.278098494101!2d80.29476262437362!3d26.48346743626506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c386cabc77c3d%3A0x32567d3304364b6c!2sRawat%20Pur%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580108760469!5m2!1sen!2sin";
        else if (x == 7)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.274440422571!2d80.31214297437363!3d26.483526336260027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3863fd11b27d%3A0x684e6f416b44409b!2sSwaroop%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580108871313!5m2!1sen!2sin";
        else if (x == 8)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8387.844433202028!2d80.31686825081182!3d26.474538651866652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c387ddd7d1dd1%3A0x38e1ea075b75ca23!2sHarsh%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580108944290!5m2!1sen!2sin";
        else if (x == 9)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.667383996262!2d80.32837027771184!3d26.482572289245518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38979337e8c1%3A0x59de6e6a38be89a7!2sPermat%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e0!3m2!1sen!2sin!4v1580108976764!5m2!1sen!2sin";
        else if (x == 10)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43471.857776160934!2d80.22359233206501!3d26.504892846568097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37ba920039e1%3A0xafdddce5014004bb!2sjvs%20tower%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109021243!5m2!1sen!2sin";
        else if (x == 11)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28589.553591748067!2d80.29656247114079!3d26.40106552421531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c465eab1f0fdd%3A0x1e1e0ac7d143bf30!2sNaubasta%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109056784!5m2!1sen!2sin";
        else if (x == 12)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34168.04987190215!2d80.36315614834257!3d26.440417248499593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c40ca36c10c1d%3A0xa712921b4fc07e6d!2sKanpur%20Cantonment%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109214471!5m2!1sen!2sin";
        else if (x == 13)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28582.96850155609!2d80.32245507117304!3d26.42763716461162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47108854072b%3A0xb40a293dfd2bfd5c!2sKidwai%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109246382!5m2!1sen!2sin";
        else if (x == 14)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28585.282712668926!2d80.38440587116169!3d26.41830186798649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c40ff33eae4c1%3A0xd0275dac51aeb3ea!2sJajmau%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109278507!5m2!1sen!2sin";
        else if (x == 15)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7143.509731182859!2d80.34908912437218!3d26.46362953795602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c475b78bd44fd%3A0xb6b3fbda71e6b846!2sGeneral%20Ganj%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e0!3m2!1sen!2sin!4v1580109327439!5m2!1sen!2sin";
        else if (x == 16)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24325.276283291114!2d80.3115321552794!3d26.3961586024505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c46f14310fd67%3A0xe9fe911c9f26d408!2sMadar%20Nagar%2C%20Yashoda%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208011!5e0!3m2!1sen!2sin!4v1580109462308!5m2!1sen!2sin";
        else if (x == 17)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14288.920568841251!2d80.29850272770142!3d26.448309545205177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47bcedadcdd5%3A0x6fb6b214b6915e6d!2sGovind%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109540184!5m2!1sen!2sin";
        else if (x == 18)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.101552631812!2d80.29331522771561!3d26.495175937051616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c383ed475c3db%3A0xc57285de63c0dd24!2sNawabganj%2C%20Kanpur%2C%20Uttar%20Pradesh%20208002!5e0!3m2!1sen!2sin!4v1580109578503!5m2!1sen!2sin";
        else if (x == 19)
            document.getElementById("google_map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28571.412973690214!2d80.3692633712297!3d26.474205297763014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3f66f42b2e73%3A0x7dccbd112b3bab46!2sShuklaganj%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1580109615502!5m2!1sen!2sin";
    }
}
///////////////////////Location///////////////////////////
var loc;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo1").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("demo1").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    loc = "http://www.google.com/maps/place/" + position.coords.latitude + "," + position.coords.longitude;
    document.getElementById("location").src = loc;
    console.log(loc);
}
//////////////////////////////Chart////////////////////
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart(locale, avail, trans, society, market) {

    var data = google.visualization.arrayToDataTable([
        ['Features', 'Percentage'],
        ['Locality', locale],
        ['Availability', avail],
        ['Transportation', trans],
        ['Society', society],
        ['Market', market]
    ]);

    var options = {
        title: 'Worth by Utilities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}