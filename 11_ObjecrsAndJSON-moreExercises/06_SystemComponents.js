let input = [
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'
];

registerElements(input);

function registerElements(input) {
    let register = new Map();

    for (sys_comp_subcomp of input) {
        [sys, comp, subcomp] = sys_comp_subcomp.split(/\s*\|\s*/);

        if (!register.has(sys)) { // system check
            register.set(sys, new Map());
        }

        if (!register.get(sys).has(comp)) { // comp check
            register.get(sys).set(comp, []);
        }

        register.get(sys).get(comp).push(subcomp);
    }

    let register_Sorted = Array.from([...register.entries()])
        .sort((a, b) => a[0].toLowerCase() > b[0].toLowerCase()) //alphabetically, case insensitive
        .sort((a, b) => (a[1].size < b[1].size)); //sort by comp counts - main criteria

    for ([system, map] of register_Sorted) {
        console.log(system);

        map = Array.from([...map.entries()])
            .sort((a, b) => a[1].length < b[1].length); //sort by subcomp count

        for ([comp, subcomps] of map) {

            console.log(`|||${comp}`)

            for (subcomp of subcomps) {
                console.log(`||||||${subcomp}`);
            }
        }
    }

}
