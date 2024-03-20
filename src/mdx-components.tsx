import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        p: (props) => (
            <p className='text-base lg:text-lg text-justify' {...props} />
        ),
        h2: (props) => (
            <h2 className='text-2xl lg:text-3xl font-bold mb-2' {...props} />
        ),
        ...components,
    }
}
