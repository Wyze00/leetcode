/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {

    const sup = new Set(supplies);
    const res = [];

    let again = true;

    while(again){

        again = false;

        for(let i = 0; i<recipes.length; i++){

            if(sup.has(recipes[i])) continue;

            let n = ingredients[i].length;

            for(let j = 0; j<ingredients[i].length; j++){

                if(sup.has(ingredients[i][j])) n--;
            }

            if(!n){
                res.push(recipes[i]);
                sup.add(recipes[i]);
                again = true;
            }
        }

    }

    return res;
};

console.log(findAllRecipes(["bread","sandwich","burger"], [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], ["yeast","flour","meat"]));