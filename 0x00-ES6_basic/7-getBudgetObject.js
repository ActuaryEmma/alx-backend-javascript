export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };
  const keyname = {}
  for (const name in budget){
	  keyname[name] = budget[name]
  }

  return keyname;
}
