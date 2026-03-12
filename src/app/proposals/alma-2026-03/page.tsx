import type { Metadata } from 'next'
import AlmaProposal from './AlmaProposal'

export const metadata: Metadata = {
  title: 'Contractor Project Proposal — Alma',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AlmaProposalPage() {
  return <AlmaProposal />
}
