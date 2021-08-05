$(document).ready(function(){
    $('#btnmain').click(function(event){
       $(".formcont").show() 
       event.preventDefault()
    })


    
    var Nairobi={
        shop1:'Jabavu Book shop - Moi Avenue Pioneer Building',
        shop2:'Mboya book center - Tom Mboya street - Imenti House',
        shop3:'Kenvy Book store Kenyatta avenue- Standard buildong'
    }
    var mombasa={
        shop1:' Bakari shop - Nyali mall',
        shop2:'Taqviw book center - Beach front mall',
        shop3:'Buhari Book store -Mama Ngina drive'
    }
    var nakuru={
        shop1:'Kamau Book shop - Kenyatta avenue',
        shop2:'Njugunas book center - Kombucha Complex',
        shop3:'Nakuru Book store - Moi drive'
    }
    var eldoret={
        shop1:'Ndalat Book shop - KVDA plaza',
        shop2:'Moiben book center - Daima Towers',
        shop3:'Chepbilat Book store - Barngrtuny Plaza'
    }
    var kericho={
        shop1:'Koiywa Book shop - Green mall ',
        shop2:'Kipchimchim book center - Kericho Complex',
        shop3:'Ainamoi Book store - Samoei Street'
    }
    var nyeri={
        shop1:'Mukurwe-ini Book shop - Nyeri Complex',
        shop2:'Kagumo book center - Total drive-inn',
        shop3:'Kagochi Book store - Bogota Street'
    }
 



function CheckBooks(name, publisher,books,location){
    this.name=name;
    this.publisher=publisher;
    this.books=books;
    this.location=location;
}
CheckBooks.prototype.glocation=function(){
    if(this.location==0){
        return Nairobi;
    }else if(this.location==1){
        return Mombasa
    }else if(this.location==2){
        return Nakuru
    }else if(this.location==3){
        return Kericho
    }else if(this.location==4){
        return Eldoret
    }else if(this.location==5){
        return Nyeri
    }

}
CheckBooks.prototype.gbooks=function(){
    if(this.books==0){
        return "Literary Genres";
    }else if(this.books==1){
        return "journals";
    }else if(this.books==2){
        return "Magazines";
    }else if (this.books==3){
        return "newspapers";
    }
}
CheckBooks.prototype.gPublisher=function(){
    if(this.publisher==0){
        return "Longhorn Kenya Ltd";
    }else if(this.publisher==1){
        return "East African Educational Publishers";
    }else if(this.publisher==2){
        return "WordAlive Publishers Limited";
    }else if (this.publisher==3){
        return "kenya literature bureau";
    }
}



$(document).ready(function(){
    $("#checkvend").click(function(event){
        var uName=document.getElementById("uname").value;
        var publisher1=document.getElementById("publisher").value;
        var book2=document.getElementById("book").value;
        var location3=document.getElementById("location").value;
        var newDetails=new CheckBooks(publisher1,book2,location3);
        var bookss= newDetails.gbooks();
        var loccationPlace= newDetails.glocation();
        var publishers=newDetails.gPublisher();
        
        switch (location3){
            case 'Nairobi':
                newLoc=Nairobi;
                break;
            case 'Mombasa':
                newLoc=mombasa;
                break
            case 'Nakuru':
                 newLoc=nakuru;
                 break;
            case 'Kericho':
                 newLoc=kericho;
               break;
            case 'Eldoret':
                newLoc=eldoret;
                break;
            case 'Nyeri':
                    newLoc=nyeri;
                    break;
            default:
                newLoc="Invalid address"
        }

        if(uName==''){
            $('#error1').show()
            return false;
        }else
        $('#error1').hide()
        if(publisher1==''){
            $('#error2').show()
            return false
        }else
        $('#error2').hide()
        if(book2==''){
            $('#error3').show()
            return false
        }else
        $('#error3').hide()
        
        if(location3==''){
            alert('Kindly  select location')
            return false
        }
                
        
        $('#myForm').submit(function(event){
            $("#outputName").text('Dear '+uName);
            $("#outputtown").text('You have selected '+location3+ "  town as your current location");
            $("#outputpublisher").text('Thank you for showing interest in '+book2+' from '+publisher1);    
            $("#listofshops").text('We have the following Verified shops in '+location3);
            $("#shop1").text("1: "+newLoc.shop1);
            $("#shop2").text("2: "+newLoc.shop2);
            $("#shop3").text("3: "+newLoc.shop3);
            event.preventDefault();
        })
    });

});
});


// form Validation
function validateForm(){
    var uName=document.getElementById("").value;

    if(uName=="" && uName.length<3){
        alert("Enter a Valid name!")
    }
    else if(myForm.publisher.value==""){
        alert("Kindly select a Publisher to proceed!")
    }
    else if(myForm.book.value==""){
        alert("kindly select the Book name!")
    } else if(myForm.location.value==""){

    }
}
