NameGenerator = function() 
{   
    //adjective array
    var adjectives = new Array(
            "funky", "cheesey", "magical"
    );
    
    //animals
    var animals = new Array(
            "dog", "kitten", "whale", "yetti"
    );
    
    getName();
    
    //get a random word when button clicked
    $(".button").on("click", getName);
    
    
    function getName()
    { 
        var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
        var animal = animals[Math.floor(Math.random()*animals.length)];
        
        $(".name").text(adjective + " " + animal);
    }
};

$(function() 
{
    var nameGenerator = new NameGenerator();
});