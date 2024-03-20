/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  const totalSpent = {}

  for(const transaction of transactions){
    if(totalSpent.hasOwnProperty(transaction.category)){
      totalSpent[transaction.category] += transaction.price
    }else{
      totalSpent[transaction.category] = transaction.price
    }
  }

  const result = []
  for(const category in totalSpent){
    result.push({
      category: category,
      totalSpent: totalSpent[category]
    })
  }


  return result;
}


let trans = [{
		id: 1,
		timestamp: 1656076800003,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}, {
    id: 2,
		timestamp: 1656076800005,
		price: 140,
		category: 'Tool',
		itemName: 'Screw-driver',
  },{
    id: 3,
		timestamp: 1656076800007,
		price: 30,
		category: 'Food',
		itemName: 'Burger',
  },{
    id: 4,
		timestamp: 1656076800008,
		price: 7,
		category: 'Extra',
		itemName: 'Pegs',
  },{
    id: 5,
		timestamp: 1656076800009,
		price: 18,
		category: 'Tool',
		itemName: 'Screws',
  }]



console.log(calculateTotalSpentByCategory(trans))

const res = calculateTotalSpentByCategory(trans)

const foodExpense = res.find(item => item.category === "Food")

console.log(foodExpense)

module.exports = calculateTotalSpentByCategory;
