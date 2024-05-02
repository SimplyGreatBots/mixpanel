import { IntegrationDefinition, z } from '@botpress/sdk'
import { name, integrationName } from './package.json'

export default new IntegrationDefinition({
  name: integrationName ?? name,
  title: 'Mixpanel',
  description: 'Integrate Mixpanel with Botpress',
  icon: 'logo.svg',
  version: '0.2.2',
  readme: 'hub.md',
  configuration: {
    schema: z.object({
      token: z.string().describe('The token for your Mixpanel project'),
    }),
  },
  actions: {
    updateUserProfile: {
      title: `Update User Profile`,
      description: `Updates the User's profile (identifying information such as email, name, etc.)`,
      input: {
        schema: z.object({
          userId: z.string().describe('The user id of the profile you want to update'),
          userProfile: z.string().describe(`JSON String of a user's metadata (e.g., email, name)`).optional(),
        })
      },
      output: {
        schema: z.object({
          success: z.boolean().describe('Whether the user profile was successfully updated'),
          log: z.string().describe('Log message'),
        })
      },
    },    
    trackEvent: {
      title: 'Track Event',
      description: 'Track event',
      input: {
        schema: z.object({
          userId: z.string().describe('The user id to track'),
          eventName: z.string().describe('The event name to track'),
          eventPayload: z.string().describe('The properties of the event as a JSON String').optional(),
        })
      },
      output: {
        schema: z.object({
          success: z.boolean().describe('Whether the event was successfully tracked'),
          log: z.string().describe('Log message'),
        })
      },
    },
  },
})