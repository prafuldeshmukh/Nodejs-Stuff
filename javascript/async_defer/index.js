/*

NORMAL 
  => normal HTML parsing goes on , as soon as script tag encounter, this script are fecth from the network then and then they are executed after that HTML parsing continue
     
ASYNC
    => In async tag , html parsing goes on , the scripts are fetch async manner and parallely , as soon as scripts are avaliable , this scripts is executing & then HTML parsing continue

DEFER
    => In case of defer HTML parsing goes on , the scripts are fetch in parallel , only execute scripts once the HTML parsing is completed

    => This is way script is loading in our browser in case of async & defer attributes
    => When should i use , what 
    => Async attribute does not gurantee the order of execution of the script But defer does
    => Defer - U have mutiple script which are dependent on each other , using async does not gurantee the execute in a particular order, that may break your code, that case u should probably use defer
    => Suppose u have to load external scripts suppose google analytices or other analystices scripts
    => Which a quite modular & indepedent script that case It makes sense to use async attribute not use defer
    => Most of the case uses defer beacuse defer attribute maitain the order of the execution 
    => it is kind of best for both world , The HTML parsing is going on, scripts are fetch from the network & only executes HTML parsing is completed.

    
*/
