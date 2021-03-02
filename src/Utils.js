
 export default class Utils{

    static getDateFormat(date){
		return date.split(' ').slice(0, 3).join(' ')
	}

	static getTimeFormat(date){
		return date.split(' ').slice(3, ).join(' ')
	}
	
 }