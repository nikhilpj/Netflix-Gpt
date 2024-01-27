export const checkValidate = (email, password) => {
    // const isName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
  const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
  const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)


  if (!isEmail)
  return 'Email invalid'
if(!isPassword)
return 'Password invalid'
// if(!isName)
// return 'Name not valid'

return null

}

