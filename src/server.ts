import { app } from './app'
const port = 3000
import 'colors'

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.green)
})
