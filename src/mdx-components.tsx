import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        p: (props) => (
            <p
                className='text-base lg:text-lg text-justify dark:text-slate-300'
                {...props}
            />
        ),
        h2: (props) => (
            <h2 className='text-2xl lg:text-4xl font-black mb-3' {...props} />
        ),
        strong: (props) => <strong className='dark:text-white' {...props} />,
        ...components,
    }
}
