export function groupByCategory(runs:{category:string}[]){return runs.reduce<Record<string,number>>((a,r)=>(a[r.category]=(a[r.category]||0)+1,a),{})}
