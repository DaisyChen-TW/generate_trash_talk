  // define sample function to randomly return a item in an array
  function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(options) {
  
  const task = {
      engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
      designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
      entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }

  const phrase = ['很簡單','很容易','很快','很正常']

  //可隨機產生工程師的task
  const engineerTask = sample(task.engineer)
  
  //可隨機產生設計師的task
  const designerTask = sample(task.designer)

  //可隨機產生企業家的task
  const entrepreneurTask = sample(task.entrepreneur)
  
  //以下可以使用${thePhrace}，輸出'很簡單','很容易','很快','很正常'
  const thePhrace = sample(phrase)
  

  //試試看else if的方式
  if (options === 'engineer') {
    return (`身為一位工程師，${engineerTask}${thePhrace}吧！`)

  } else if (options === 'designer'){
    return (`身為一位設計師，${designerTask}${thePhrace}吧！`)

  } else if (options === 'entrepreneur'){
    return (`身為一位企業家，${entrepreneurTask}${thePhrace}吧！`)
    
  } else {
    return ('請點選任一圖片')
  }


  //針對工程師的幹話

  //if (options.job === '工程師') {

    //return console.log(`身為一位工程師，${engineerTask} + ${thePhrace}吧！`)
  //}
  
  //針對設計師的幹話
  //if (options.job === '設計師') {
    //return console.log(`身為一位設計師，${designerTask} + ${thePhrace}吧！`)
  //}
  

  //針對企業家的幹話
  //if (options.job === '企業家') {
    //return console.log(`身為一位企業家，${entrepreneurTask} + ${thePhrace}吧！`)
  //}    
  
  // let randomTrashTalk = `身為一個${options.job},${trashCollection},${sample(phrase)}吧!`
  // return randomTrashTalk
}

//generateTrashTalk()

// export generatePassword function for other files to use
module.exports = generateTrashTalk

