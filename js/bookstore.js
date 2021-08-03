$(document).ready(function(event){
    $('#btnmain').click(function(){
       $(".formcont").show() 
    })
});

    
//     var Nairobi={
//         shop1:'Jabavu Book shop',
//         shop2:'Mboya book center',
//         shop3:'Kenvy Book store'
//     }
//     var mombasa={
//         shop1:' Bakari shop',
//         shop2:'Taqviw book center',
//         shop3:'Buhari Book store'
//     }
//     var nakuru={
//         shop1:'Kamau Book shop',
//         shop2:'Njugunas book center',
//         shop3:'Nakuru Book store'
//     }
//     var eldoret={
//         shop1:'Ndalat Book shop',
//         shop2:'Moiben book center',
//         shop3:'Chepbilat Book store'
//     }
//     var kericho={
//         shop1:'Koiywa Book shop',
//         shop2:'Kipchimchim book center',
//         shop3:'Ainamoi Book store'
//     }
//     var nyeri={
//         shop1:'Mukurwe-ini Book shop',
//         shop2:'Kagumo book center',
//         shop3:'Kagochi Book store'
//     }
//     //var uname= document.getElementById('uname').value
//     var uName=$("input #uname").val();
//     var publisher=$('#publisher option:selected').val();
//     var book=$('#book option:selected').val();
//     var location=parseInt($('#location option:selected').val())

// //    function returnDetails(){
// //        if(value==0){
// //            return Nairobi;
// //        }
// //    }

//     $('#checkvend').click(function(){
//         $('#outputName').text('Dear '+uName);
//         $('#outputtown').text('You have selected '+maddress+' town');
//         $('#outputgenre').text('You have selected '+book);
//     })


// })
function CheckBooks(name, publisher,books,location){
    this.name=name;
    this.publisher=publisher;
    this.books=books;
    this.location=location;
}
CheckBooks.prototype.glocation=function(){
    if(this.location==0){
        return "Nairobi";
    }else if(this.location==1){
        return "Mombasa"
    }else if(this.location==2){
        return "Nakuru"
    }else if(this.location==3){
        return "Kericho"
    }else if(this.location==4){
        return "Eldoret"
    }else if(this.location==5){
        return "Nyeri"
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
        event.preventDefault();
        var uName=document.getElementById("uname").value;
        var publisher1=$("#publisher option :selected").val();
        var book2=parseInt($("#book option:selected").val());
        var location3=parseInt($("#location option:selected").val());
        var newDetails=new CheckBooks(publisher1,book2,location3);
        var bookss= newDetails.gbooks();
        var loccationPlace= newDetails.glocation();
        var publishers=newDetails.gPublisher();
        


        $("#outputName").text('Dear '+uName);
        $("#outputpublisher").text('You have selected '+publishers);
        $("#outputtown").text('You have selected '+loccationPlace+ ' town');
        $("#outputgenre").text('You have selected '+bookss);
        

    });

});
