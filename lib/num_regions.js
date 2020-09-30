function numRegions(graph) {

    let pairs = []
    let compCount = 0

    for (let key in graph){
        graph[key].forEach(val=>{
            if(!pairs.includes(val)){
                pairs.push(val)
            }
        })
        if (pairs.includes(key)) continue;
        pairs.push(key, ...graph[key])
        compCount += 1
    }
    return compCount
    // let graph1 = {
    //     'a': ['b'],
    //     'b': ['a'],
    //     'c': ['d'],
    //     'd': ['e', 'c'],
    //     'e': ['d'],
    // };
}


module.exports = {
    numRegions
};
