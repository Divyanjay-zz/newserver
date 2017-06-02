    (function(){
            $(document).ready(function(){
                var gridDiv = document.querySelector('#myGrid');
            var selecteddate= 0;
             var gridOptions = {

                    columnDefs: [
                        {headerName: 'Date', field: 'date'},
                        {headerName: 'total_ledger_balance', field: 'total_ledger_balance',valueGetter: function(params){
                            return 'dddddd';
                        }}                       
                    ]
                };
                new agGrid.Grid(gridDiv, gridOptions);
               
                var getData = $.ajax('https://datagram.me/api/v1/d/qpK9-kJsv5v8rCFs7H4pMQ.json');            
                
                getData.then(function(response, statusText, xhrObj){
                    
                    console.log(xhrObj);
                    
                    gridOptions.api.setRowData(response.responses.daywise_ledger_baclance.data);
                }, 
                function(xhrObj, textStatus, err){
                    console.log(err);
                })
               document.querySelector('#dateup').addEventListener('click',function(){
                selecteddate++;
                //gridOptions.api.refreshView();
               console.log('ondateup');
               });
               document.querySelector('#datedown').addEventListener('click',function(){
               selecteddate--;
                //gridOptions.api.refreshView();
               console.log('ondatedown');
               });
 
            })            
        })(); 