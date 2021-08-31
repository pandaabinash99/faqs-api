const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
	const { faqs } = JSON.parse(
		fs.readFileSync(`${__dirname}/faqs.json`, 'utf-8')
	)
	res.json({ success: true, faqs })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server is running on port ' + PORT))
