import capitalizeFirstLetter from "./capitalizeFirstLetter";




export default function getSpreadsheetURL(entries, categoryId) {

    const concatenateSpreadsheetData = function(data) {
        let dataString = "";
    
        data.forEach(row => {
            dataString += row.join(",") + "\n"
        })
    
        return dataString;
    }

    const snakeToStart = function(snakeString) {
        return snakeString.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
    }

    const trimRow = function(rowObject){
        const {parish_id, created_at, updated_at, id, category_id, ...trimmedObject} = rowObject;
        return trimmedObject;
    } 
    
    const sanitizeRow = function(rowObject) {
        const trimmedRow = trimRow(rowObject);
        trimmedRow.parish = `"${trimmedRow.parish.name}"`
        trimmedRow.category = capitalizeFirstLetter(trimmedRow.category.name)

        return trimmedRow
    }

    const prepareRow = function(rowObject) {
        return Object.values(sanitizeRow(rowObject))
    }

    const getColumns = function() {
        console.log(entries)
        const randomCategoryId = Object.keys(entries.categories)[0];
        const initialGrade = Object.values(entries.categories[randomCategoryId])[0]
        return Object.keys(trimRow(initialGrade[0])).map(snakeToStart)
    }

    const getGradeEntries = function() {
        if (categoryId) {
            return Object.values(entries.categories[categoryId])
        } else {
            return Object.values(entries.categories).map(Object.values).flat(1)
        }
    }
    
    const getRows = function() {
        const grades = getGradeEntries()
        const rows = grades.map(Object.values).flat(2).map(prepareRow)
        return rows
    }

   
    const formatData = function() {
        const data = [];
        data.push(getColumns());
   
        getRows().forEach(row => {
            data.push(row);
        })
        

        console.log("data", data);
        return data
    }
    

    const csvContent = concatenateSpreadsheetData(formatData());
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });

    return URL.createObjectURL(blob)
    
}