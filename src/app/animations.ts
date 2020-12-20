import { trigger, state, style, transition, animate, keyframes, AnimationQueryMetadata, AnimationMetadata, AnimationTriggerMetadata } from '@angular/animations';


export const routerTransition: AnimationMetadata = trigger('routerTransition', [
  // when its hidden ==> void , then set opacity to 0
  state('void', style({ position: 'absolute', width: '100%', opacity: 0 })),

  // when i n any other state, set opacity to 1
  state('*', style({ position: 'absolute', width: '100%', opacity: 1 })),

  transition(':enter', [
    style({ transform: 'translateY(20%)', opacity: 0 }),
    animate('0.8s ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
  ]),

  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate('0.8s ease-in', style({ transform: 'translateY(-20%)', opacity: 0 }))
  ])
])


