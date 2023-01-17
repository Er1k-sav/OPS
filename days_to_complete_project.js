let daySum = 0;

let records = []
let brecords = []
let sbrecords = []

let set = [
    {i: "A1", d: 6},
    {i: "A2", d: 8},
    {i: "A3", d: 12},
    {i: "A4", d: 6},
    {i: "A5", d: 8},
    {i: "A6", d: 12}
]

let list = [
    ["A1", "A2"],
    ["A1", "A3"],
    ["A1", "A4"],
    ["A2", "A5"],
    ["A3", "A5"],
    ["A4", "A5"],
    ["A5", "A6"]
]


for (let i = 0; i < list.length; i++) {
    let a = set.filter((e) => e.i == list[i][0]);
    let b = set.filter((e) => e.i == list[i][1]);

    let id = list[i][0] + list[i][1];
    let ds = a[0].d + b[0].d;
    records.push({i: id, d: ds})
}
let pointer = "A1";
daySum += set.filter((e) => e.i.indexOf(pointer) == 0)[0].d;
for (let i = 0; i < set.length; i++) {
    let srecords = records.filter((e) => e.i.indexOf(set[i].i) == 0);
    sbrecords = srecords.sort((a, b) => a.d < b.d ? 1 : (a.d > b.d) ? -1 : 0);

    let set2 = sbrecords.sort((a, b) => a.d < b.d ? 1 : (a.d > b.d) ? -1 : 0);
    for (let i = 0; i < set2.length; i++) {
        if (set2[i].i.slice(0, 2).includes(pointer)) {
            pointer = set2[i].i.slice(2);
            daySum += set.filter((e) => e.i.indexOf(pointer) == 0)[0].d;
        }
    }
}

console.log(`DAYS TO COMPLETE PROJECT: ${daySum}`)
