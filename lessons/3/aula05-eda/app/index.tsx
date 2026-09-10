import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoIndicador } from "../components/CartaoIndicador";
import { INDICADORES } from "../src/dominio";

export default function Index() {
  const [somenteAtencao, setSomenteAtencao] = useState<boolean>(false);
  const indicadoresVisiveis = somenteAtencao
    ? INDICADORES.filter((indicador) => indicador.situacao === "atencao")
    : INDICADORES;

  function alternarFiltro(): void { setSomenteAtencao((valorAtual) => !valorAtual); }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <Image
            accessibilityRole="image"
            accessibilityLabel="Painel didático da permanência estudantil"
            source={require("../assets/images/painel-didatico.png")}
            style={styles.imagemPainel}
          />

          <View style={styles.textosCabecalho}>
            <Text style={styles.marca}>IFMA · PROTÓTIPO DIDÁTICO</Text>
            <Text style={styles.titulo}>Painel EDA</Text>
            <Text style={styles.introducao}>Indicadores simulados de permanência estudantil.</Text>
            <Text style={styles.aviso}>DADOS FICTÍCIOS E AGREGADOS · Não representam uma turma real.</Text>
          </View>
        </View>

        <View style={styles.controles}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={somenteAtencao ? "Mostrar todos os indicadores" : "Mostrar somente indicadores em atenção"}
            onPress={alternarFiltro}
            style={({ pressed }) => [
              styles.botao,
              somenteAtencao && styles.botaoAtivo,
              pressed && styles.botaoPressionado,
            ]}
          >
            <Text style={[styles.textoBotao, somenteAtencao && styles.textoBotaoAtivo]}>
              {somenteAtencao ? "Somente em atenção" : "Metas em atenção"}
            </Text>
          </Pressable>
          <Text accessibilityRole="text" style={styles.contagem}>
            {indicadoresVisiveis.length} exibidos
          </Text>
        </View>

        <View style={styles.lista}>
          {indicadoresVisiveis.map((indicador) => (
            <CartaoIndicador key={indicador.id} indicador={indicador} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#F8FAFC" },
  conteudo: { padding: 20, paddingBottom: 36, width: "100%", maxWidth: 720, alignSelf: "center" },
  cabecalho: { alignItems: "center", flexDirection: "row", gap: 12, marginBottom: 14 },
  textosCabecalho: { flex: 1 },
  imagemPainel: { width: 96, height: 96, borderRadius: 12, backgroundColor: "#E2E8F0", resizeMode: "cover" },
  marca: { color: "#B91C1C", fontSize: 12, fontWeight: "700" },
  titulo: { color: "#166534", fontSize: 30, fontWeight: "800", marginTop: 6 },
  introducao: { color: "#334155", fontSize: 16, lineHeight: 23, marginTop: 8 },
  aviso: { color: "#64748B", fontSize: 12, lineHeight: 18, marginTop: 8 },
  controles: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 12 },
  botao: { backgroundColor: "#FFFFFF", borderColor: "#166534", borderRadius: 999, borderWidth: 2, paddingHorizontal: 16, paddingVertical: 10, minHeight: 48, justifyContent: "center" },
  botaoAtivo: { backgroundColor: "#166534" },
  botaoPressionado: { backgroundColor: "#BBF7D0", borderColor: "#14532D" },
  textoBotao: { color: "#166534", fontSize: 14, fontWeight: "700" },
  textoBotaoAtivo: { color: "#FFFFFF" },
  contagem: { color: "#64748B", fontSize: 14, flexShrink: 1 },
  lista: { marginTop: 16 },
});
