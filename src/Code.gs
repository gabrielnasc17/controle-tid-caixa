CÓD GS:
const ID_PLANILHA = "Seu_Id_Planilha"; 
 
function getPlanilha() { 
  return SpreadsheetApp.openById(ID_PLANILHA); 
} 
 
function doGet() { 
  return HtmlService.createTemplateFromFile("Index") 
    .evaluate() 
    .setTitle("CONTROLE"); 
} 
 
function include(nome) { 
  return HtmlService.createHtmlOutputFromFile(nome).getContent(); 
} 
 
// ===================================================== 
// RM 
// ===================================================== 
 
function salvarRM(etiqueta, tids) { 
 
  var aba = getPlanilha().getSheetByName("RM"); 
 
  var email = Session.getActiveUser().getEmail() || "SEM EMAIL"; 
 
  var agora = new Date(); 
 
  tids.forEach(function(tid){ 
 
    aba.appendRow([ 
      agora, 
      etiqueta, 
      tid, 
      email 
    ]); 
 
  }); 
 
  return true; 
} 
 
function buscarEtiquetaRM(etiqueta){ 
 
  var abaRM = getPlanilha().getSheetByName("RM"); 
  var abaDS = getPlanilha().getSheetByName("ENTRADA DS"); 
 
  var dadosRM = abaRM.getDataRange().getValues(); 
  var dadosDS = abaDS.getDataRange().getValues(); 
 
  var lista = []; 
 
  for(var i=1;i<dadosRM.length;i++){ 
 
    if( 
      String(dadosRM[i][1]).trim().toUpperCase() == 
      String(etiqueta).trim().toUpperCase() 
    ){ 
 
      var tid = String(dadosRM[i][2]).trim(); 
 
      var status = "PENDENTE"; 
 
      for(var j=1;j<dadosDS.length;j++){ 
 
        if( 
 
    String(dadosDS[j][1]).trim().toUpperCase() == 
    String(etiqueta).trim().toUpperCase() 
 
    && 
 
    String(dadosDS[j][2]).trim() == tid 
 
){ 
 
    status = "VALIDADA"; 
    break; 
 
} 
 
      } 
 
      lista.push({ 
        tid: tid, 
        status: status 
      }); 
 
    } 
 
  } 
 
  return lista; 
} 
 
// ===================================================== 
// ENTRADA DS 
// ===================================================== 
 
function salvarEntradaDS(etiqueta, tids){ 
 
  var aba = getPlanilha().getSheetByName("ENTRADA DS"); 
 
  var email = Session.getActiveUser().getEmail() || "SEM EMAIL"; 
 
  var agora = new Date(); 
 
  tids.forEach(function(tid){ 
 
    aba.appendRow([ 
      agora, 
      etiqueta, 
      tid, 
      email 
    ]); 
 
  }); 
 
  return true; 
} 
 
// ===================================================== 
// BUSCAR ETIQUETA NA DS 
// ===================================================== 
 
function buscarTidsDaEtiqueta(etiqueta){ 
 
  var abaEntrada = getPlanilha().getSheetByName("ENTRADA DS"); 
  var abaCheckin = getPlanilha().getSheetByName("CHECK-IN"); 
 
  var dadosEntrada = abaEntrada.getDataRange().getValues(); 
  var dadosCheckin = abaCheckin.getDataRange().getValues(); 
 
  var lista = []; 
 
  for(var i = 1; i < dadosEntrada.length; i++){ 
 
    if( 
      String(dadosEntrada[i][1]).trim().toUpperCase() == 
      String(etiqueta).trim().toUpperCase() 
    ){ 
 
      var tid = String(dadosEntrada[i][2]).trim(); 
 
      var status = "PENDENTE"; 
 
      // Verifica se essa TID já foi recepcionada no CHECK-IN 
      for(var j = 1; j < dadosCheckin.length; j++){ 
 
        if(String(dadosCheckin[j][3]).trim() == tid){ 
          status = "VALIDADA"; 
          break; 
        } 
 
      } 
 
      lista.push({ 
        tid: tid, 
        status: status 
      }); 
 
    } 
 
  } 
 
  return { 
    found: lista.length > 0, 
    tids: lista 
  }; 
 
} 
 
// ===================================================== 
// CHECK-IN 
// ===================================================== 
 
function salvarCheckIn(caixa, itens){ 
 
  if(!caixa || !itens || itens.length === 0){ 
    return false; 
  } 
 
  var aba = getPlanilha().getSheetByName("CHECK-IN"); 
 
  var email = Session.getActiveUser().getEmail() || "SEM EMAIL"; 
 
  var agora = new Date(); 
 
  itens.forEach(function(item){ 
 
    aba.appendRow([ 
      agora, 
      caixa, 
      item.etiqueta, 
      item.tid, 
      email 
    ]); 
 
  }); 
 
  return true; 
} 
 
// ===================================================== 
// BUSCAR CAIXA 
// ===================================================== 
 
function buscarCaixa(caixa){ 
 
  var aba = getPlanilha().getSheetByName("CHECK-IN"); 
 
  var dados = aba.getDataRange().getValues(); 
 
  var lista = []; 
 
  for(var i=1;i<dados.length;i++){ 
 
    if(String(dados[i][1]).trim() == String(caixa).trim()){ 
 
      lista.push({ 
        etiqueta: String(dados[i][2]), 
        tid: String(dados[i][3]), 
        status: "FALTANDO" 
      }); 
 
    } 
 
  } 
 
  return lista; 
} 
 
// ===================================================== 
// VERIFICAR FINALIZAÇÃO 
// ===================================================== 
 
function caixaJaFinalizada(caixa){ 
 
  var aba = getPlanilha().getSheetByName("CHECK-OUT"); 
 
  var dados = aba.getDataRange().getValues(); 
 
  for(var i=1;i<dados.length;i++){ 
 
    if(String(dados[i][1]).trim() == String(caixa).trim()){ 
 
      return true; 
 
    } 
 
  } 
 
  return false; 
} 
 
// ===================================================== 
// CHECK-OUT 
// ===================================================== 
 
function salvarCheckOut(caixa, assetTracking, itens){ 
 
  if(caixaJaFinalizada(caixa)){ 
    throw new Error("Esta caixa já foi finalizada."); 
  } 
 
  if(!assetTracking){ 
    throw new Error("Informe o Asset Tracking."); 
  } 
 
  var aba = getPlanilha().getSheetByName("CHECK-OUT"); 
 
  var email = Session.getActiveUser().getEmail() || "SEM EMAIL"; 
 
  var agora = new Date(); 
 
  itens.forEach(function(item){ 
 
    aba.appendRow([ 
      agora, 
      caixa, 
      item.etiqueta, 
      item.tid, 
      assetTracking, 
      "LOCALIZADA", 
      email 
    ]); 
 
  }); 
 
  return true; 
} 
 
function exportarCSV(nomeAba){ 
 
  var aba = getPlanilha().getSheetByName(nomeAba); 
 
  var dados = aba.getDataRange().getValues(); 
 
  var csv = dados.map(function(linha){ 
    return linha.join(";"); 
  }).join("\n"); 
 
  return csv; 
} 
 
// ===================================================== 
// CHECK-OUT RM 
// ===================================================== 
 
function buscarAssetTracking(asset){ 
 
  var aba = getPlanilha().getSheetByName("CHECK-OUT"); 
 
  var dados = aba.getDataRange().getValues(); 
 
  var lista = []; 
 
  for(var i=1;i<dados.length;i++){ 
 
    if( 
      String(dados[i][4]).trim().toUpperCase() == 
      String(asset).trim().toUpperCase() 
    ){ 
 
      lista.push({ 
        etiqueta: String(dados[i][2]), 
        tid: String(dados[i][3]), 
        status: "PENDENTE" 
      }); 
 
    } 
 
  } 
 
  return lista; 
} 
 
function salvarCheckOutRM(asset, itens){ 
 
  var aba = getPlanilha().getSheetByName("CHECK-OUT RM"); 
 
  var email = Session.getActiveUser().getEmail() || "SEM EMAIL"; 
 
  var agora = new Date(); 
 
  itens.forEach(function(item){ 
 
    aba.appendRow([ 
      agora, 
      asset, 
      item.etiqueta, 
      item.tid, 
      "VALIDADA", 
      email 
    ]); 
 
  }); 
 
  return true; 
}
