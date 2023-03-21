<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MembreConcoursRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MembreConcoursRepository::class)]
#[ApiResource]
class MembreConcours
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_invitation = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_validate = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcours')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Concours $Concours = null;

    #[ORM\ManyToOne(inversedBy: 'membreConcours')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Membre $membre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fonction = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateInvitation(): ?\DateTimeInterface
    {
        return $this->date_invitation;
    }

    public function setDateInvitation(\DateTimeInterface $date_invitation): self
    {
        $this->date_invitation = $date_invitation;

        return $this;
    }

    public function getDateValidate(): ?\DateTimeInterface
    {
        return $this->date_validate;
    }

    public function setDateValidate(\DateTimeInterface $date_validate): self
    {
        $this->date_validate = $date_validate;

        return $this;
    }

    public function getConcours(): ?Concours
    {
        return $this->Concours;
    }

    public function setConcours(?Concours $Concours): self
    {
        $this->Concours = $Concours;

        return $this;
    }

    public function getMembre(): ?Membre
    {
        return $this->membre;
    }

    public function setMembre(?Membre $membre): self
    {
        $this->membre = $membre;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(?string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }
}
