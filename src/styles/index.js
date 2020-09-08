const Styles = (theme) => {
  if (theme === `ligth`) {
    return require('./ligthStyles').default
  }
  if (theme === `dark`) {
    return require('./darkStyles').default
  }
}



export default Styles 
// module.exports = { Styles }