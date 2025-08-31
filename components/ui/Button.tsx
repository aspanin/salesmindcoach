import { Pressable, Text } from 'react-native';
import { cn } from '@/shared/cn';

export function Button({ title, onPress, variant='primary', disabled }: { title: string; onPress?: () => void; variant?: 'primary' | 'secondary'; disabled?: boolean }) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      className={cn(
        'px-4 py-3 rounded-2xl items-center justify-center',
        variant==='primary' && 'bg-primary',
        disabled && 'opacity-50'
      )}
    >
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  );
}
