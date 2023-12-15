//show loader before page loading

document.onreadystatechange = function () {
  
      
    if (document.readyState !== "complete") {
       
            document.querySelector(
            "body").style.overflow = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        setTimeout(function() {
            document.querySelector(
                "#loader").style.display = "none";
                document.querySelector(
                "body").style.overflow = "auto";
         
        }, 1000);
        
    }
};



