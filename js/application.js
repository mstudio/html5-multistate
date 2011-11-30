/***
 * @author  username
 * @description description
 */


my_application = function(){
    /**** private jQuery DOM vars ***/
    var $sample;
    
     /*** private application vars ***/
    var sample;
        
    return{
        /*** public vars ***/
     
        /*** public methods ***/
        init:function(){
            $sample = $("#sample");
	}
    }
    
    /*** private methods ***/
    function sampleMethod(){
        
    }
    

    /*
     *
     * Utilities
     * 
     */
    function log(msg){
        if (typeof console != 'undefined'){ // prevents IE error
            console.log(msg);
        }
    }
    
    function shuffle(o){
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
}();




$(document).ready(function(){
     my_application.init();
});