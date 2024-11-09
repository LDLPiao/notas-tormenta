import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Definindo um valor padrão para a URL da imagem
  const imageUrl = cfg?.imageUrl ?? "./attachments/Home.png"  // Ajuste para o caminho da imagem padrão

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={imageUrl} alt={title} class="page-title-image" />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  display: inline-block;  /* Para manter o layout consistente */
}

.page-title-image {
  max-width: 100%;  /* A imagem vai se ajustar ao tamanho do contêiner */
  height: auto;     /* Para manter a proporção da imagem */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
