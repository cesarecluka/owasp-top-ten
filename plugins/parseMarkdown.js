
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

export default (context, inject) => {

  const parseMarkdown = (md) => {
    return unified().use(remarkParse).use(remarkRehype).parse(md)
  }

  inject('parseMarkdown', parseMarkdown)

}

