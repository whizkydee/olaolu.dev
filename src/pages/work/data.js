import {
  conectarLogo,
  olaoluLogo,
  pixelLogo,
  deereLogo,
  dropdLogo,
  hellotaxLogo,
  dignisiaLogo,
} from './logos'

export default [
  {
    name: 'hellotax',
    color: 'rgba(24,156,230,.1)',
    logo: hellotaxLogo,
    siteName: 'app.hellotax.com',
    internalPage: true,
  },
  {
    name: 'Conectar',
    color: 'rgba(255,34,124,.1)',
    logo: conectarLogo,
    siteName: null,
    internalPage: true,
  },
  {
    name: 'John Deere',
    color: 'rgba(66,123,29,.1)',
    logo: deereLogo,
    siteName: 'atu300.deere.com',
    internalPage: true,
  },
  {
    name: 'Personal Website',
    color: 'rgba(72,49,212,.08)',
    logo: olaoluLogo,
    siteName: 'olaolu.dev',
    internalPage: false,
  },
  {
    name: 'Pixel2HTML',
    color: 'rgba(62,70,110,.1)',
    logo: pixelLogo,
    siteName: 'pixel2html.netlify.app',
    internalPage: true,
  },
  {
    name: 'dropd',
    color: 'rgba(0,51,102,.1)',
    logo: dropdLogo,
    siteName: 'npm.im/react-dropd',
    internalPage: false,
  },
  {
    name: 'Dignisia',
    color: 'rgba(241,163,162,.1)',
    logo: dignisiaLogo,
    siteName: 'dignisia.com',
    internalPage: true,
  },
]
