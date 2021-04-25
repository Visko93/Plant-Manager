
enum Directions {
  Descending = "DESCENDING",
  Ascending = "ASCENDING"
}

interface SortParams {
  list: [string];
  key: string;
  direction: Directions
}

export default function sortingListAlphabetically({list, key, direction}: SortParams) {  
  switch (direction) {
    case Directions.Ascending:
      return list.sort((a,b) => b[key] - a[key]) 
      case Directions.Descending:
        return list.sort((a,b) => a[key] - b[key]) 
    default:
      return list
  }
} 