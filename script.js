function withoutCost(minimumValue){
    const minimumCost =document.getElementById(minimumValue);
     minimumCost.innerText =parseFloat (0);
    
   }
   //function for  changing
   function extraCharge(value,isTrue){
       const extraCost = document.getElementById(value);
       //memory 15gb
   if(value=="memory-cost" & isTrue == true){
   let memoryText = extraCost.innerText;
   extraCost.innerText = parseFloat(180);
   
   
   }
   //storage 512
   else if(value=='storage-cost' && isTrue == true){
       let storageText = extraCost.innerText;
       extraCost.innerText =parseFloat(100);
       
   }
   //storage 1tb
   else if(value=='storage-cost' && isTrue == false){
       let storageText2 = extraCost.innerText;
       extraCost.innerText =parseFloat(180);
      
   }
   // delivary 20
   else if(value == 'delivaryfree' && isTrue == true){
       let delivaryText = extraCost.innerText;
       extraCost.innerText =parseFloat(20);
       const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 20 ;
       
   }
   
   }
   
   //for memory defult
   document.getElementById('memory-8gb').addEventListener('click',function(){
      withoutCost('memory-cost');
      const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 0 ;
    
     
   })
   //for storage defult
    document.getElementById('storage-256gb').addEventListener('click',function(){
        withoutCost('storage-cost');
        const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 0 ;
       
    })
    //for delivary charge free
    document.getElementById(' delivary-free').addEventListener('click',function(){
       withoutCost('delivaryfree');
       const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 0 ;
       
    })
   
   
   //for 16gb memory charge
   document.getElementById('memory-16gb').addEventListener('click',function(){
     extraCharge('memory-cost',true);
     const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 180 ;
     
   })
   //for storage charge 521
    document.getElementById(' storage-512').addEventListener('click',function(){
        extraCharge('storage-cost',true);
        const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 100 ;
       
    });
    //1 tb storage 
    document.getElementById(' storage-1tb').addEventListener('click',function(){
        extraCharge('storage-cost',false);
        const total = document.getElementById("total-cost");
      const totalText = total.innerText;
      const totalNum = parseFloat(totalText);
      total.innerText =totalNum + 180 ;
      
    });
   //  code for promo code And hurrah 
   function promoClick(){
               const promoInput =document.getElementById(' promo-input');
               const promoInputValue = promoInput.value;
               if(promoInputValue == "stevekaku"){
               const total = document.getElementById("total-cost");
           const totalText = total.innerText;
           const totalNum = parseFloat(totalText);
           // const discTotal =(totalNum-(totalNum *20)/100) ;
           let discounTotal  = document.getElementById("total-cost2");
           discounTotal.innerText = (totalNum-(totalNum *20)/100);
   
       }
   }