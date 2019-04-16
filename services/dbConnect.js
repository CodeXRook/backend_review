const {getDbConn,} = require('../db')

const dbAddr = process.env.DATABASE_URL || `postgress://localhost/back_end_review`


const create = ({name}) => {
    return getDbConn(dbAddr).none(
        `INSERT INTO genres (name) VALUE ($[name]);`,
        {name}
    )
}