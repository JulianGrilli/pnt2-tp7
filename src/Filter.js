import moment from 'moment/moment'
export default {
    methods: {
        dateFormat: function(date) {
            return moment(date).format('DD/MM/YYYY h:mm:ss')
        } 
    }
}