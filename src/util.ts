import ReiyuImg from '~/assets/jast/reiyu.png'
import KumoImg from '~/assets/jast/kumo.png'
import IchigoImg from '~/assets/jast/ichigo.png'
import YozoImg from '~/assets/jast/yozo.png'
import TaneImg from '~/assets/jast/tane.png'
import ViviImg from '~/assets/jast/vivi.png'

import TwitchIcon from '~/assets/icons/twitch.png'
import TwitchBwIcon from '~/assets/icons/twitch-bw.png'
import YoutubeIcon from '~/assets/icons/youtube.png'
import YoutubeBwIcon from '~/assets/icons/youtube-bw.png'
import DiscordIcon from '~/assets/icons/discord.png'
import DiscordBwIcon from '~/assets/icons/discord-bw.png'
import TwitterIcon from '~/assets/icons/x.png';
import TiktokIcon from '~/assets/icons/tiktok.png'
import PixivIcon from '~/assets/icons/pixiv.png'
import InstagramIcon from '~/assets/icons/instagram.png'


export const icons = [
  {
    name: 'discord',
    url: DiscordIcon.src
  },
  {
    name: 'youtube',
    url: YoutubeIcon.src
  },
  {
    name: 'twitch',
    url: TwitchIcon.src
  },
  {
    name: 'twitter',
    url: TwitterIcon.src
  },
  {
    name: 'tiktok',
    url: TiktokIcon.src
  },
  {
    name: 'pixiv',
    url: PixivIcon.src
  },
  { name: 'instagram', url: InstagramIcon.src},
  {
    name: 'discord-bw',
    url: DiscordBwIcon.src
  },
  {
    name: 'twitch-bw',
    url: TwitchBwIcon.src
  },
  {
    name: 'youtube-bw',
    url: YoutubeBwIcon.src
  }
] as const;

export type IconType = typeof icons[number]['name'];

export function getIcon(name: IconType) {
  return icons.find(i => i.name === name) || icons[0]
}

export function baldursGateUrl(slug: string) {
  return `/kumo-site/dnd/baldurs-gate/sessions/${slug}`
}

interface JastIdol {
  name: string
  img: string,
  styles: string[]
  socials: {
    name: IconType,
    link: string
  }[]
}

export const jast: JastIdol[] = [
  {
    name: 'Kumo Kuddelmuddel',
    img: KumoImg.src,
    styles: ['from-kumo-purple', 'to-kumo-purple-700', 'bg-linear-to-t'],
    socials: [
      { link: 'https://twitch.tv/kumogorogoro', name: 'twitch' },
      { link: 'https://youtube.com/@kumogorogoro', name: 'youtube' },
      { link: 'https://twitter.com/kumogorogoro', name: 'twitter' },
      { link: 'https://discord.gg/kumtown', name: 'discord'}
    ]
  },
    {
    name: 'Reiyu GuiGui',
    img: ReiyuImg.src,
    styles: ['from-reiyu-pink', 'to-reiyu-blue', 'bg-linear-to-tr'],

    socials: [
      { link: 'https://www.twitch.tv/reiyuguigui', name: 'twitch' },
      { link: 'https://www.youtube.com/c/ReiyuGuigui', name: 'youtube' },
      { link: 'https://twitter.com/reiyuguigui', name: 'twitter' },
      { link: 'https://discord.gg/reiyu', name: 'discord'}
    ]
  },
  {
    name: 'Ichigo Lemonade',
    img: IchigoImg.src,
    styles: ['from-ichigo-pink', 'to-ichigo-yellow', 'bg-linear-to-tr'],

    socials: [
      { link: 'https://www.twitch.tv/ichigolemonade_', name: 'twitch' },
      { link: 'https://www.youtube.com/channel/UChiGxBQ7gHXOYURvc9zod4w', name: 'youtube' },
      { link: 'https://twitter.com/ichigolemonade_', name: 'twitter' },
      { link: 'https://www.tiktok.com/@ichigolemonade_', name: 'tiktok'}
    ]
  },
  {
    name: 'Yozora Aoi',
    img: YozoImg.src,
    styles: ['from-yozo-light', 'to-yozo-dark', 'bg-linear-to-tr'],
    socials: [
      { link: 'https://www.twitch.tv/yozora', name: 'twitch' },
      { link: 'https://www.youtube.com/channel/UCTdtNTRxycFnzQtGfPOZYyw', name: 'youtube' },
      { link: 'https://twitter.com/YozoraCh', name: 'twitter' }
    ]
  },
  {
    name: 'Tane Tenshi',
    img: TaneImg.src,
    styles: ['from-tane-yellow', 'to-tane-red', 'bg-linear-to-tr'],
    socials: [
      { link: 'https://www.twitch.tv/tanetenshi', name: 'twitch' },
      { link: 'https://www.youtube.com/@TaneTenshi', name: 'youtube' },
      { link: 'https://twitter.com/tane_tenshi', name: 'twitter' },
      { link: 'https://www.instagram.com/tanetenshi/', name: 'instagram'},
      { link: 'https://www.pixiv.net/en/users/9499184', name: 'pixiv'}
    ]
  },
    {
    name: 'VividlyVIVI',
    img: ViviImg.src,
    styles: ['from-vivi-purple', 'to-vivi-yellow', 'bg-linear-to-tr'],
    socials: [
      { link: 'https://www.twitch.tv/vividlyvivi', name: 'twitch' },
      { link: 'https://www.youtube.com/c/vividlyASMR', name: 'youtube' },
      { link: 'https://twitter.com/vividlyASMR', name: 'twitter' }
    ]
  }
]
