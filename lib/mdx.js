import fs from 'fs'
import path from 'path'
import fg from 'fast-glob'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const ROOT_PATH = process.cwd()
const DATA_PATH = path.join(ROOT_PATH, 'data')
const BLOG_PATH = path.join(DATA_PATH, 'blog')

export const getArticleSlugs = async () => {
    const filenames = await fg(['**/*.mdx'], { cwd: BLOG_PATH })
    return filenames.map((filename) => filename.replace('.mdx', ''))
}

export const getArticleBySlug = (slug) => {
    const articlePath = path.join(BLOG_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(articlePath, 'utf-8')
    const { data, content } = matter(source)

    return {
        frontmatter: {
            ...data,
            slug,
            readingTime: readingTime(content),
        },
        content,
    }
}

export const getAllArticles = async () => {
    const articleSlugs = await getArticleSlugs()

    return articleSlugs
        .map((articleSlug) => getArticleBySlug(articleSlug))
        .sort(
            (a, b) =>
                Number(new Date(b.frontmatter?.publishedAt)) -
                Number(new Date(a.frontmatter?.publishedAt))
        )
}
