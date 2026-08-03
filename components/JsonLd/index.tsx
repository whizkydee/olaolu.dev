import {serializeJsonLd} from '@/lib/seo'

export function JsonLd({data}: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: serializeJsonLd(data)}}
    />
  )
}

type Props = {data: object}
