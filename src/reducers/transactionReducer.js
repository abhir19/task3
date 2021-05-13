var Data = [
    {
        id: 1,
        Title: "Building Applications in React and Flux",
        Length: "   5:08",
        Category: "	JavaScript",
        Author: "cory-house",
    },
    {
        id: 2,
        Title: "Clean Code: Writing Code for Humans",
        Length: "3:10",
        Category: "Software Practices",
        Author: "cory-house",
    },
    {
        id: 3,
        Title: "Architecting Applications for the Real World",
        Length: "   2:52",
        Category: "	Software Architecture",
        Author: "cory-house",
    },
    {
        id: 4,
        Title: "Becoming an Outlier: Reprogramming the Developer Mind",
        Length: " 2:30",
        Category: "	Career",
        Author: "cory-house",
    },
    {
        id: 5,
        Title: "Web Component Fundamentals",
        Length: "5:10",
        Category: "HTML5",
        Author: "cory-house",
    },
  ]
  localStorage.setItem('transactions', JSON.stringify(Data));
export const transactionReducer = (state, action) => {
    
    var list = JSON.parse(localStorage.getItem('transactions'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload }

        case 'DELETE':
            list.splice(action.payload, 1)
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }
        default:
            return state;
    }

}



export default transactionReducer