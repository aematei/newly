import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";

import { HStack } from "@/components/ui/hstack";
import { Icon, SearchIcon } from "@/components/ui/icon";
import { Input, InputField} from "@/components/ui/input";
import { StyleSheet, View, Text } from "react-native";

const BUTTON_SIZE = "sm";
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center pt-8 px-6">
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <Icon as={SearchIcon} className="text-black m-2 w-6 h-6" />
        <InputField placeholder="Search here..." />
      </Input>
      <ButtonGroup className="pt-6">
        <Button
          size={BUTTON_SIZE}
          variant="outline"
          $hover-bg="blue"
          action="primary"
        >
          <ButtonText>Breaking</ButtonText>
        </Button>
        <Button size={BUTTON_SIZE} variant="outline" action="primary">
          <ButtonText>Local</ButtonText>
        </Button>
        <Button size={BUTTON_SIZE} variant="outline" action="primary">
          <ButtonText>Sports</ButtonText>
        </Button>
        <Button size={BUTTON_SIZE} variant="outline" action="primary">
          <ButtonText>Food</ButtonText>
        </Button>
      </ButtonGroup>
    </View>
  );
}
